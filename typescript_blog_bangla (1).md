# TypeScript Blog - Interface, Type আর Union/Intersection

**লেখক:** শিমুল মাহমুদ রুমেল  
**তারিখ:** ১৮ নভেম্বর, ২০২৫

---

এই ব্লগে TypeScript এর দুইটা জিনিস নিয়ে আলোচনা করব।

---

## ১. Interface আর Type এর পার্থক্য

### Interface কী?

Interface হলো object এর structure define করার একটা উপায়। সাধারণত object shape বা class structure বানাতে use করা হয়।

```ts
interface User {
  name: string;
  age: number;
  email: string;
}

const user: User = {
  name: "Karim",
  age: 25,
  email: "karim@example.com"
};
```

### Type কী?

Type হলো যেকোনো ধরনের type define করার জন্য। Union, intersection বা complex types বানাতে এটা বেশি flexible।

```ts
type ID = string | number;
type Status = "active" | "inactive";

let userId: ID = "abc123";
let userStatus: Status = "active";
```

### মূল পার্থক্য

Interface এ same name এ multiple declaration merge হয়ে যায়, কিন্তু type এ error দেয়। Type এ union বানানো সহজ, interface এ extends করা natural লাগে।

### Combined Example

দুইটা একসাথে use করে একটা উদাহরণ দেখি।

```ts
interface Person {
  name: string;
  age: number;
}

type Role = "admin" | "user" | "guest";

type Employee = Person & {
  role: Role;
  employeeId: string;
}

const employee: Employee = {
  name: "Rahman",
  age: 30,
  role: "admin",
  employeeId: "EMP001"
};
```

---

## ২. Union আর Intersection Types

### Union Types (|)

Union type মানে একটা variable একাধিক type এর হতে পারে। যখন একটা value different types হতে পারে তখন এটা use করি।

```ts
type PaymentMethod = "bkash" | "nagad" | "card";

function processPayment(method: PaymentMethod, amount: number) {
  console.log(`Processing ${amount} via ${method}`);
}
```

### Intersection Types (&)

Intersection type মানে multiple types একসাথে combine করা। যখন একটা object এ সব properties একসাথে লাগে তখন এটা use করি।

```ts
type ContactInfo = {
  email: string;
  phone: string;
}

type Address = {
  city: string;
  area: string;
}

type FullProfile = ContactInfo & Address;
```

### Real Scenario Example

এখানে union আর intersection দুইটাই use করা হয়েছে। এটা একটা authentication system এর example যেখানে different user types আছে কিন্তু সবার কিছু common properties আছে।

```ts
type Admin = {
  role: "admin";
  permissions: string[];
}

type RegularUser = {
  role: "user";
  userId: string;
}

type AuthUser = (Admin | RegularUser) & {
  token: string;
  isActive: boolean;
}

const adminUser: AuthUser = {
  role: "admin",
  permissions: ["read", "write", "delete"],
  token: "xyz789",
  isActive: true
};
```

---

## শেষ কথা

Interface object structure এর জন্য ভালো, Type flexible types এর জন্য। Union দিয়ে options define করি, Intersection দিয়ে combine করি।