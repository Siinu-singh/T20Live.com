'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "What is T20Live?",
        answer: "T20Live is your ultimate companion for live T20 cricket scores, real-time updates, match summaries, and in-depth analysis. We provide a modern, engaging platform for cricket fans.",
    },
    {
        question: "How can I check live scores?",
        answer: "You can check live scores by navigating to the 'Live' page from the main menu. It provides real-time updates for all ongoing matches.",
    },
    {
        question: "Is the T20Live app free to use?",
        answer: "Yes, T20Live is completely free to use. You can access all our features, including live scores, news, and rankings, without any cost.",
    },
    {
        question: "Which tournaments do you cover?",
        answer: "We cover all major international and domestic T20 tournaments, including the ICC T20 World Cup, IPL, Big Bash League, PSL, and more. Check the 'Tournaments' page for details.",
    },
    {
        question: "How often are the player and team rankings updated?",
        answer: "The rankings on our 'Rankings' page are updated weekly to reflect the latest official ICC rankings for T20 teams, batsmen, bowlers, and all-rounders.",
    },
    {
        question: "Can I view past match results?",
        answer: "Yes, you can find detailed scorecards and summaries for all completed matches on the 'Results' page.",
    },
    {
        question: "Do you provide news and articles?",
        answer: "Absolutely! Our 'News' section is regularly updated with the latest happenings, match previews, analysis, and feature articles from the world of T20 cricket.",
    },
    {
        question: "Is there a mobile app for T20Live?",
        answer: "Currently, we have a web-based platform that is fully responsive and works beautifully on all devices, including mobile phones. A dedicated mobile app is in our future plans.",
    },
    {
        question: "How can I get in touch for feedback or support?",
        answer: "We'd love to hear from you! You can reach out to us through our 'Contact Us' page for any feedback, questions, or support inquiries.",
    },
    {
        question: "What makes T20Live different from other cricket score apps?",
        answer: "T20Live focuses on a clean, modern, and user-centric design. We not only provide scores but also aim to enhance the viewing experience with unique insights and a beautiful interface.",
    },
];


export function FaqSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Frequently Asked Questions</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={`item-${index}`} className="border-b">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}
