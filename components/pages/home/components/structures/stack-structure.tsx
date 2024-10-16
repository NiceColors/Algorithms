'use client'

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"


export default function StackStructure() {

    const [stack, setStack] = useState<number[]>([1, 2,])
    const [isAnimated, setIsAnimated] = useState(false)
    const addItem = () => {

        const lastNumber = stack[stack.length - 1]

        if (stack.length >= 4) return

        setStack(prev => [...prev, lastNumber ? lastNumber + 1 : 1])
    }

    const removeItem = () => {
        if (stack.length === 0) return
        setStack(prev => prev.slice(0, prev.length - 1))
    }

    const handleAnimation = () => {
        setIsAnimated(isAnimated => !isAnimated)
        setStack(prev => prev.slice(0, 3))
    }

    useEffect(() => {
        let interval: NodeJS.Timeout

        let lastNumber = stack[stack.length - 1]

        if (isAnimated) {
            interval = setInterval(() => {
                if (lastNumber === 3) {
                    setIsAnimated(false)
                    return
                }
                setStack(prev => [...prev, lastNumber ? lastNumber + 1 : 1])
            }, 900)
        }

        return () => clearInterval(interval)
    }, [stack])


    const isAddButtonDisabled = stack.length >= 4
    const isRemoveButtonDisabled = stack.length === 0




    return (
        <div>
            <h2 className="text-2xl">
                Pilha / Stack
            </h2>
            <p>
                Uma pilha é uma estrutura de dados linear na qual os elementos podem ser inseridos e excluídos apenas de um lado da lista, chamado de topo .
                Uma pilha segue o princípio LIFO (Last In First Out), ou seja, o elemento inserido no último é o primeiro elemento a sair.
            </p>
            <br />
            <p>
                A inserção de um elemento na pilha é chamada de operação push e a exclusão de um elemento da pilha é chamada de operação pop.
                <br />
                Na pilha, sempre acompanhamos o último elemento presente na lista com um ponteiro chamado top .
            </p>

            <div className="flex space-x-4 mt-4">
                <Button onClick={addItem} disabled={isAddButtonDisabled}>Adicionar Item</Button>
                <Button onClick={removeItem} disabled={isRemoveButtonDisabled}>Remover Item</Button>
                <Button onClick={handleAnimation}>{isAnimated ? 'Parar' : 'Iniciar'} Animação</Button>

            </div>

            <div className="text-2xl flex flex-col-reverse gap-4 mt-4">

                {
                    stack.map((item, index) => (
                        <div key={index} className="p-4 bg-green-50 w-20 h-20 flex items-center justify-center">
                            {item}
                        </div>
                    ))
                }

            </div>

        </div>
    )
}