"use client";

import {
  ArrowRight,
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  VideoIcon,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "text-violet-500/10",
    href: "/conversation",
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "text-emerald-500/10",
    href: "/music",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "text-pink-700/10",
    href: "/image",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "text-orange-700/10",
    href: "/video",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-700",
    bgColor: "text-green-700/10",
    href: "/code",
  },
];

const DashboardPage = () => {
  const router = useRouter();
  return (
    <section>
      <div className="mb-8 spacy-y-4">
        <h1 className="text-2xl font-bold text-center md:text-4xl">
          Explore the power of AI
        </h1>
        <p className="text-sm font-light text-center md:text-lg text-muted-foreground">
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>
      <div className="px-4 space-y-4 md:px-20 lg:px-20">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="flex items-center justify-between hover:shadow-md p-4 transition cursor-pointer borde-black/5"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </section>
  );
};

export default DashboardPage;
