import { Card } from "../Card"

interface Props {
    items: any[],
    loading?: boolean,
    error?: boolean

}

export const ItemList = (props: Props) => {

    return (
        <div>
            {props.items[0] && props.items.map((item) => {
                return <Card id={item.id} name={item.name} key={item.id} imageLink={item.imageLink} />
            })
            }

        </div>
    )
}

