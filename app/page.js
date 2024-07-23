'use client'

import { dbmsQuestions } from './questions'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">DBMS Important Questions</h1>
      <Accordion type="multiple" className="space-y-4">
        {dbmsQuestions.map((q) => (
          <AccordionItem key={q.id} value={`item-${q.id}`} className="bg-gray-800 shadow-md rounded">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <h2 className="text-xl font-semibold text-left">
                Question {q.id}: {q.question}
              </h2>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-gray-300">
              <p>{q.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  )
}