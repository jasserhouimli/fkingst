'use client'

import { useState, useRef, useEffect } from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { v4 as uuidv4 } from 'uuid'

type Message = {
  id: string
  role: 'user' | 'assistant'
  content: string
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-message',
      role: 'assistant',
      content: 'Bonjour ! Je suis votre conseiller financier virtuel. Comment puis-je vous aider aujourd\'hui ?'
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: `user-${uuidv4()}`,
      role: 'user',
      content: input
    }
    
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] })
      })

      if (!response.body) throw new Error('Erreur de connexion au serveur')

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let assistantContent = ''
      const assistantMessageId = `assistant-${uuidv4()}`

      setMessages(prev => [...prev, {
        id: assistantMessageId,
        role: 'assistant',
        content: ''
      }])

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value)
        const lines = chunk.split('\n\n').filter(line => line.startsWith('data: '))

        for (const line of lines) {
          const data = line.replace('data: ', '')
          
          if (data === '[DONE]') break

          try {
            const parsed = JSON.parse(data)
            if (parsed.text) {
              assistantContent += parsed.text
              setMessages(prev => prev.map(msg => 
                msg.id === assistantMessageId 
                  ? { ...msg, content: assistantContent } 
                  : msg
              ))
            }
          } catch (error) {
            console.error('Erreur parsing:', error)
          }
        }
      }
    } catch (error) {
      setMessages(prev => [...prev, {
        id: `error-${uuidv4()}`,
        role: 'assistant',
        content: '**Erreur** : Impossible de contacter le service. Veuillez réessayer plus tard.'
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col h-full max-w-3xl mx-auto">
      {/* Zone des messages */}
      <div className="flex-1 overflow-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`p-4 rounded-lg ${
              message.role === 'user'
                ? 'bg-blue-50 ml-auto max-w-[85%]'
                : 'bg-white border max-w-[90%] shadow-sm'
            }`}
          >
            <Markdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ node, ...props }) => (
                  <h2 className="text-xl font-bold mt-4 mb-2" {...props} />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="list-disc pl-6 mb-2" {...props} />
                ),
                strong: ({ node, ...props }) => (
                  <strong className="font-semibold" {...props} />
                )
              }}
            >
              {message.content}
            </Markdown>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Formulaire d'envoi */}
      <form 
        onSubmit={handleSubmit}
        className="sticky bottom-0 bg-white border-t p-4"
      >
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Posez votre question financière..."
            className="flex-1 p-3 border rounded-lg focus:outline-blue-500 focus:ring-2"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {isLoading ? 'Envoi...' : 'Envoyer'}
          </button>
        </div>
      </form>
    </div>
  )
}