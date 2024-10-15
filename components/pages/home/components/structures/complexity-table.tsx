import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

type ComplexityData = {
    dataStructure: string
    timeComplexity: {
        average: {
            access: string
            search: string
            insertion: string
            deletion: string
        }
        worst: {
            access: string
            search: string
            insertion: string
            deletion: string
        }
    }
    spaceComplexity: string
}

const complexityData: ComplexityData[] = [
    {
        dataStructure: "Array",
        timeComplexity: {
            average: { access: "Θ(1)", search: "Θ(n)", insertion: "Θ(n)", deletion: "Θ(n)" },
            worst: { access: "O(1)", search: "O(n)", insertion: "O(n)", deletion: "O(n)" }
        },
        spaceComplexity: "O(n)"
    },
    {
        dataStructure: "Stack",
        timeComplexity: {
            average: { access: "Θ(n)", search: "Θ(n)", insertion: "Θ(1)", deletion: "Θ(1)" },
            worst: { access: "O(n)", search: "O(n)", insertion: "O(1)", deletion: "O(1)" }
        },
        spaceComplexity: "O(n)"
    },
    {
        dataStructure: "Queue",
        timeComplexity: {
            average: { access: "Θ(n)", search: "Θ(n)", insertion: "Θ(1)", deletion: "Θ(1)" },
            worst: { access: "O(n)", search: "O(n)", insertion: "O(1)", deletion: "O(1)" }
        },
        spaceComplexity: "O(n)"
    },
    {
        dataStructure: "Linked List",
        timeComplexity: {
            average: { access: "Θ(n)", search: "Θ(n)", insertion: "Θ(1)", deletion: "Θ(1)" },
            worst: { access: "O(n)", search: "O(n)", insertion: "O(1)", deletion: "O(1)" }
        },
        spaceComplexity: "O(n)"
    },
    {
        dataStructure: "Hash Table",
        timeComplexity: {
            average: { access: "Θ(1)", search: "Θ(1)", insertion: "Θ(1)", deletion: "Θ(1)" },
            worst: { access: "O(n)", search: "O(n)", insertion: "O(n)", deletion: "O(n)" }
        },
        spaceComplexity: "O(n)"
    },
    {
        dataStructure: "Binary Search Tree",
        timeComplexity: {
            average: { access: "Θ(log n)", search: "Θ(log n)", insertion: "Θ(log n)", deletion: "Θ(log n)" },
            worst: { access: "O(n)", search: "O(n)", insertion: "O(n)", deletion: "O(n)" }
        },
        spaceComplexity: "O(n)"
    },
    {
        dataStructure: "AVL Tree",
        timeComplexity: {
            average: { access: "Θ(log n)", search: "Θ(log n)", insertion: "Θ(log n)", deletion: "Θ(log n)" },
            worst: { access: "O(log n)", search: "O(log n)", insertion: "O(log n)", deletion: "O(log n)" }
        },
        spaceComplexity: "O(n)"
    },
    {
        dataStructure: "Red-Black Tree",
        timeComplexity: {
            average: { access: "Θ(log n)", search: "Θ(log n)", insertion: "Θ(log n)", deletion: "Θ(log n)" },
            worst: { access: "O(log n)", search: "O(log n)", insertion: "O(log n)", deletion: "O(log n)" }
        },
        spaceComplexity: "O(n)"
    },
    {
        dataStructure: "B-Tree",
        timeComplexity: {
            average: { access: "Θ(log n)", search: "Θ(log n)", insertion: "Θ(log n)", deletion: "Θ(log n)" },
            worst: { access: "O(log n)", search: "O(log n)", insertion: "O(log n)", deletion: "O(log n)" }
        },
        spaceComplexity: "O(n)"
    },
    {
        dataStructure: "Graph",
        timeComplexity: {
            average: { access: "Θ(n^2)", search: "Θ(2^n)", insertion: "Θ(2^n)", deletion: "Θ(2^n)" },
            worst: { access: "O(n^2)", search: "O(2^n)", insertion: "O(2^n)", deletion: "O(2^n)" }
        },
        spaceComplexity: "O(n)"
    },
    {
        dataStructure: "Heap",
        timeComplexity: {
            average: { access: "Θ(n)", search: "Θ(n)", insertion: "Θ(log n)", deletion: "Θ(log n)" },
            worst: { access: "O(n)", search: "O(n)", insertion: "O(log n)", deletion: "O(log n)" }
        },
        spaceComplexity: "O(n)"
    }

]

const getComplexityColor = (complexity: string): string => {
    if (complexity.includes('n^2')) return 'bg-red-200'
    if (complexity.includes('log')) return 'bg-orange-200'
    if (complexity.includes('1')) return 'bg-green-300'
    if (complexity.includes('n')) return 'bg-yellow-200'
    return ''
}

export default function ComplexityTable() {
    return (
        <div className="rounded-md border">
            <Table>
                <TableCaption>
                    <div className="flex items-center justify-center p-4 pt-2">
                        Complexidade de Tempo e Espaço de Estruturas de Dados
                    </div>
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead rowSpan={3} className="border-r ">Estrutura de Dados</TableHead>
                        <TableHead colSpan={8}>Complexidade de Tempo</TableHead>
                        <TableHead rowSpan={3} className="border-l">Complexidade de Espaço</TableHead>
                    </TableRow>
                    <TableRow>
                        <TableHead colSpan={4}>Melhor Caso</TableHead>
                        <TableHead colSpan={4} className="border-l">Pior Caso</TableHead>
                    </TableRow>
                    <TableRow>
                        <TableHead>Acessar</TableHead>
                        <TableHead>Buscar</TableHead>
                        <TableHead>Inserir</TableHead>
                        <TableHead>Deletar</TableHead>
                        <TableHead className="border-l">Acessar</TableHead>
                        <TableHead>Buscar</TableHead>
                        <TableHead>Inserir</TableHead>
                        <TableHead>Deletar</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="border-b">
                    {complexityData.map((item, index) => (
                        <TableRow key={index} >
                            <TableCell>{item.dataStructure}</TableCell>
                            <TableCell className={getComplexityColor(item.timeComplexity.average.access)}>{item.timeComplexity.average.access}</TableCell>
                            <TableCell className={getComplexityColor(item.timeComplexity.average.search)}>{item.timeComplexity.average.search}</TableCell>
                            <TableCell className={getComplexityColor(item.timeComplexity.average.insertion)}>{item.timeComplexity.average.insertion}</TableCell>
                            <TableCell className={getComplexityColor(item.timeComplexity.average.deletion)}>{item.timeComplexity.average.deletion}</TableCell>
                            <TableCell className={getComplexityColor(item.timeComplexity.worst.access)}>{item.timeComplexity.worst.access}</TableCell>
                            <TableCell className={getComplexityColor(item.timeComplexity.worst.search)}>{item.timeComplexity.worst.search}</TableCell>
                            <TableCell className={getComplexityColor(item.timeComplexity.worst.insertion)}>{item.timeComplexity.worst.insertion}</TableCell>
                            <TableCell className={getComplexityColor(item.timeComplexity.worst.deletion)}>{item.timeComplexity.worst.deletion}</TableCell>
                            <TableCell className={getComplexityColor(item.spaceComplexity)}>{item.spaceComplexity}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table >
        </div >
    )
}