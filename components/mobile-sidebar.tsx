"use client";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet } from "@/components/ui/sheet";

const MobileSidebar = () => {
  return (
    <Sheet>
      <Button className="md:hidden" size="icon" variant="ghost">
        <Menu />
      </Button>
    </Sheet>
  );
};

export default MobileSidebar;
