import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


  export default function Menu(){
    return (
        <Menubar>
  <MenubarMenu>
    <MenubarTrigger>
    <Avatar className="mx-5">
            <AvatarImage src="https://github.com/shadcn.png" />
             <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    </MenubarTrigger>
    <MenubarContent>
        <div>
            <h1>4</h1>
        </div>
     
    </MenubarContent>
  </MenubarMenu>
</Menubar>
    )
  }
  