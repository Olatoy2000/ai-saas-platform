"use client";

import { MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "text-violet-500/10",
    href: "/conversation",
  },
];
const DashboardPage = () => {
  return (
    <section>
      <div className="mb-8 spacy-y-4">
        <h1 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of AI
        </h1>
        <p className="text-sm font-light md:text-lg text-center text-muted-foreground">
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-20 space-y-4">
        {tools.map((tool) => (
          <Card
            key={tool.href}
            className="p-4 borde-black/5 flex items-center justify-between transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default DashboardPage;
