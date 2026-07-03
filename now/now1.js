datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

// Define the User schema
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  role      Role     @default(USER)
  posts     Post[]   // One-to-Many relationship
  createdAt DateTime @default(now())
}

// Define the Post schema
model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  published Boolean  @default(false)
  authorId  Int
  author    User     @relation(fields: [authorId], references: [id])
}

enum Role {
  USER
  ADMIN
}







def check_email(email):
    if "@" in email and "." in email:
        return "Valid email format"
    return "Invalid email format"

print(check_email("user@example.com"))


{

"name":"titi",
"email":"rahat@example.com",
"password":"securePass123!"


}

function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const data = Object.fromEntries(formData);
  console.log('Form data:', data);
}



