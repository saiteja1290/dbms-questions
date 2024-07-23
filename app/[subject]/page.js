'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function SubjectPage() {
    const [questions, setQuestions] = useState([])
    const params = useParams()
    const subject = params.subject

    useEffect(() => {
        // In a real app, you'd fetch this data from an API
        import(`../questions/${subject}.js`)
            .then(module => setQuestions(module.default))
            .catch(err => console.error(err))
    }, [subject])

    return (
        <main className="container mx-auto px-4 py-8 font-mono">
            <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">
                &larr; Back to Subjects
            </Link>
            <h1 className="text-3xl font-bold mb-8">Important {subject.toUpperCase()} Questions</h1>
            <Accordion type="multiple" className="space-y-4">
                {questions.map((q) => (
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