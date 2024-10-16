import { ScrollArea } from "./scroll-area"


interface ISidebarItemProps {
    title: string
    href: string
    active: boolean
    color?: string
    items: ISidebarItemProps[] | []
}

interface ISidebarProps {
    sections?: {
        id: string
        title: string
        color?: string
        items: ISidebarItemProps[] | []
    }[]
}


export const Sidebar = ({ sections }: ISidebarProps) => {


    const pseudo_sections = [
        {
            id: '1',
            title: 'Estruturas de Dados',
            items: [
                {
                    title: 'Vetor / Array',
                    href: '#array',
                    active: false,
                    items: []
                },
                {
                    title: 'Pilha / Stack',
                    href: '#stack',
                    active: false,
                    items: []
                },
                {
                    title: 'Fila / Queue',
                    href: '#queue',
                    active: false,
                    items: []
                },
                {
                    title: 'Lista Encadeada / Linked List',
                    href: '#linked-list',
                    active: false,
                    items: []
                },
                {
                    title: 'Árvore / Tree',
                    href: '#tree',
                    active: false,
                    items: []
                },
                {
                    title: 'Grafo / Graph',
                    href: '#graph',
                    active: false,
                    items: []
                }
            ]
        },
        {
            id: '2',
            title: 'Algoritmos',
            items: [
                {
                    title: 'Busca Binária',
                    href: '#binary-search',
                    active: false,
                    items: []
                },
                {
                    title: 'Bubble Sort',
                    href: '#bubble-sort',
                    active: false,
                    items: []
                },
                {
                    title: 'Insertion Sort',
                    href: '#insertion-sort',
                    active: false,
                    items: []
                },
                {
                    title: 'Selection Sort',
                    href: '#selection-sort',
                    active: false,
                    items: []
                },
                {
                    title: 'Merge Sort',
                    href: '#merge-sort',
                    active: false,
                    items: []
                },
                {
                    title: 'Quick Sort',
                    href: '#quick-sort',
                    active: false,
                    items: []
                },
                {
                    title: 'Counting Sort',
                    href: '#counting-sort',
                    active: false,
                    items: []
                },
                {
                    title: 'Radix Sort',
                    href: '#radix-sort',
                    active: false,
                    items: []
                },
                {
                    title: 'Heap Sort',
                    href: '#heap-sort',
                    active: false,
                    items: []
                }
            ]
        },
        {
            id: '3',
            title: 'Estruturas de Dados Avançadas',
            items: [
                {
                    title: 'Trie',
                    href: '#trie',
                    active: false,
                    items: []
                },
                {
                    title: 'Segment Tree',
                    href: '#segment-tree',
                    active: false,
                    items: []
                },
                {
                    title: 'Fenwick Tree',
                    href: '#fenwick-tree',
                    active: false,
                    items: []
                },
                {
                    title: 'Disjoint Set',
                    href: '#disjoint-set',
                    active: false,
                    items: []
                },
                {
                    title: 'Binary Indexed Tree',
                    href: '#binary-indexed-tree',
                    active: false,
                    items: []
                },
                {
                    title: 'Suffix Array',
                    href: '#suffix-array',
                    active: false,
                    items: []
                },
                {
                    title: 'Suffix Tree',
                    href: '#suffix-tree',
                    active: false,
                    items: []
                },
                {
                    title: 'K-D Tree',
                    href: '#k-d-tree',
                    active: false,
                    items: []
                },
            ]
        },
    ]

    const itemStyle = 'before:content-[""] before:w-[1px] before:h-[calc(20px+100%)] before:bg-green-500 before:rounded-full before:absolute before:left-[-23px] before:top-[25px]'


    return (
        <nav className="fixed top-0 left-0">
            <ScrollArea className="hidden md:block bg-background fixed top-0 left-0 w-80 h-screen py-12" hidden={false}>
                <div className="px-12">
                    {pseudo_sections.map(section => (
                        <div key={section.id} className="overflow-hidden">
                            <h2 className="text-xl font-bold">{section.title}</h2>
                            <ul className="space-y-12 ml-8 my-6">
                                {section.items.map((item, index) => (
                                    <li
                                        key={item.href}
                                        className="text-sm relative before:content-[''] before:z-20 before:w-5 before:h-5  before:border before:border-purple-300 before:bg-slate-50 before:rounded-full before:absolute before:left-[-32px] before:top-[0px] before:p-2"
                                    >
                                        <div
                                            className={index !== section.items.length - 1 ? itemStyle : ''}
                                        >
                                            <p>{item.title}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </ScrollArea>
        </nav>
    )


}