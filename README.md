# Basic NestJS Project with Prisma - User Creation API

This project is an initial experience with NestJS and Prisma technologies. The application has only one **POST** endpoint to create users, receiving a JSON body with the fields `name` and `occupation`. It's important to note that this is an experimental project and does not follow specific development standards, serving only educational purposes.

## Technologies Used

- **NestJS**  
- **Prisma**  
- **TypeScript**

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/MarcosAlencar04/projetoInicial-NestJs.git
   cd projetoInicial-NestJs
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure the Database**

   Create a `.env` file at the root of the project with the connection variable. Example (using SQLite):

   ```env
   DATABASE_URL="file:./dev.db"
   ```

4. **Run Migrations and Generate Prisma Client**

   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```

## Usage

1. **Start the Server**

   ```bash
   npm run start:dev
   ```

2. **Make a POST Request**

   Send a request to `http://localhost:3000` with a JSON body containing the fields `name` and `occupation`. Example:

   ```json
   {
     "name": "João",
     "occupation": "Developer"
   }
   ```

The application processes the request and creates a new user in the database.

3. **View the Database (Optional)**

   To view and manage the database through a visual interface, you can use the following command:

   ```bash
   npx prisma studio
   ```

   This will open Prisma Studio in your browser, allowing you to inspect and modify the data.

## Considerations

This project is solely for learning and initial exploration of NestJS and Prisma technologies, without adhering to advanced development standards.
