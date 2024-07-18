import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-100">
      <div className="text-xl font-bold">Logo</div>
      <div className="hidden md:flex space-x-4">
        <Button variant="ghost">Home</Button>
        <Button variant="ghost">About</Button>
        <Button variant="ghost">Contact</Button>
      </div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="flex flex-col space-y-4 mt-4">
            <Button variant="ghost" onClick={() => setIsOpen(false)}>Home</Button>
            <Button variant="ghost" onClick={() => setIsOpen(false)}>About</Button>
            <Button variant="ghost" onClick={() => setIsOpen(false)}>Contact</Button>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

const Index = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto mt-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Blank Canvas</h1>
        <p className="text-lg">Chat with the agent to start making edits.</p>
      </main>
    </div>
  );
};

export default Index;