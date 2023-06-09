import { Card } from "../Card"

interface Item {
    id: number,
    name: string,
    imageLink: string,
}

interface Props {
    items: Item[],
    loading?: boolean,
    error?: boolean,
    endpoint: string

}

export const ItemList = (props: Props) => {

    return (
        <div>
            {props.items[0] && props.items.map((item) => {
                return <Card endpoint={props.endpoint} id={item.id} name={item.name} key={item.id} imageLink={item.imageLink} />
            })
            }

        </div>
    )
}

