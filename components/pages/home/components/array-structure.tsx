'use client'

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"


type TArrayStructureExample = number

export default function ArrayStructure() {

    const [array, setArray] = useState<TArrayStructureExample[]>([1, 2, 3, 4, 5, 6, 7])

    const [isAnimated, setIsAnimated] = useState(false)

    const addItem = () => {

        const lastNumber = array[array.length - 1]

        if (array.length >= 10) return

        setArray(prev => [...prev, lastNumber ? lastNumber + 1 : 1])
    }

    const removeItem = () => {
        if (array.length === 0) return
        setArray(prev => prev.slice(0, prev.length - 1))
    }

    const handleAnimation = () => {
        setIsAnimated(isAnimated => !isAnimated)
        setArray(prev => prev.slice(0, 7))
    }

    useEffect(() => {
        let interval: NodeJS.Timeout

        let lastNumber = array[array.length - 1]

        if (isAnimated) {
            interval = setInterval(() => {
                if (lastNumber === 10) {
                    setIsAnimated(false)
                    return
                }
                setArray(prev => [...prev, lastNumber ? lastNumber + 1 : 1])
            }, 900)
        }

        return () => clearInterval(interval)
    }, [array])

    const isAddButtonDisabled = array.length >= 10
    const isRemoveButtonDisabled = array.length === 0


    return (
        <div>
            <h2 className="text-2xl">
                Vetor / Array
            </h2>
            <p>Vetores são listas sequenciais homogêneas, ou seja, os elementos estão um atrás do outro e possuem o mesmo tamanho e tipo</p>


            <div className="flex space-x-4 mt-4">
                <Button onClick={addItem} disabled={isAddButtonDisabled}>Adicionar Item</Button>
                <Button onClick={removeItem} disabled={isRemoveButtonDisabled}>Remover Item</Button>
                <Button onClick={handleAnimation}>{isAnimated ? 'Parar' : 'Iniciar'} Animação</Button>
            </div>


            <article className="text-5xl mt-4">
                [{
                    array.map((item, index) => (
                        <span key={index}>{item}{index < array.length - 1 ? ', ' : ''}</span>
                    ))
                }]
            </article>


        </div>
    )
}