import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const createUser = async (fullName: string,email: string,username: string,password: string,confirmPassword: string) => {

    const user = await prisma.user.create({
        data: {
            fullName,
            email,
            username,
            password,
            confirmPassword
        }
    });
      return user;
  
}
export const gettAllUsers= async () => {

    const users = await prisma.user.findMany()
      return users;
  
}
export const deleteUser= async (id: string) => {

    const users = await prisma.user.delete({
        where: {
            id: id,
        }
    })
      return users;
  
}