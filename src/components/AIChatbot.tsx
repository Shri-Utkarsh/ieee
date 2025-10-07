
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Zap, Send } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm here to help you navigate the IEEE Student Branch SAGE University website. You can ask me about events, chapters, resources, or anything else you're looking for!"
    }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);

    // Simple chatbot responses
    const getResponse = (query: string): string => {
      const lowerQuery = query.toLowerCase();
      
      if (lowerQuery.includes("event") || lowerQuery.includes("workshop")) {
        return "You can find upcoming events on our Events page! We regularly host workshops, seminars, and technical sessions. Check out the AI Workshop Series on December 15th and IEEE Day Celebration on December 20th.";
      } else if (lowerQuery.includes("chapter") || lowerQuery.includes("society")) {
        return "Visit our Chapters page to learn about our various IEEE societies including Computer Society, Power & Energy Society, and Women in Engineering. Each chapter has its own activities and focus areas.";
      } else if (lowerQuery.includes("contact") || lowerQuery.includes("email")) {
        return "You can reach us through the Contact page where you'll find our contact form, office location, and social media links. We're always happy to help!";
      } else if (lowerQuery.includes("membership") || lowerQuery.includes("join")) {
        return "Information about membership and how to join can be found in our Resources section. We welcome all students interested in engineering and technology!";
      } else if (lowerQuery.includes("about") || lowerQuery.includes("mission")) {
        return "Learn about our mission, vision, and history on the About Us page. You can also find profiles of our faculty advisors and executive committee members there.";
      } else if (lowerQuery.includes("gallery") || lowerQuery.includes("photo")) {
        return "Check out our Gallery page to see photos and videos from our events and member activities. It's a great way to see what we're all about!";
      } else if (lowerQuery.includes("news") || lowerQuery.includes("announcement")) {
        return "Stay updated with our latest news and announcements on the News page. We regularly post updates about member achievements and branch activities.";
      } else {
        return "I can help you find information about our events, chapters, membership, contact details, and more. Try asking about specific topics like 'upcoming events' or 'how to join'!";
      }
    };

    setTimeout(() => {
      const botResponse: Message = { role: "assistant", content: getResponse(input) };
      setMessages(prev => [...prev, botResponse]);
    }, 500);

    setInput("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          size="icon"
          className="fixed bottom-6 right-6 h-12 w-12 rounded-full shadow-lg z-50 bg-blue-600 hover:bg-blue-700"
        >
          <Zap className="h-6 w-6" />
          <span className="sr-only">Open AI Assistant</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] h-[500px] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-blue-600" />
            IEEE SB Assistant
          </DialogTitle>
          <DialogDescription>
            Ask me anything about the IEEE Student Branch!
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="flex-1 p-4 border rounded-md">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-foreground"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
          />
          <Button onClick={handleSend} size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
