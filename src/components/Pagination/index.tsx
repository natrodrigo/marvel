import styled from "styled-components";

interface Props {
    limit: number,
    total: number,
    offset: number,
    setOffset: React.Dispatch<React.SetStateAction<number>>
}

const MAX_BUTTONS = 9;
const MAX_LEFT = (MAX_BUTTONS - 1) / 2

export const Pagination = (props: Props) => {

    const currentPage = props.offset ? (props.offset / props.limit) + 1 : 1;
    const totalPages = Math.ceil(props.total / props.limit);
    const firstButtonNumber = Math.max(currentPage - MAX_LEFT, 1);

    return (
        <StyledDiv>
            {Array.from({ length: Math.min(MAX_BUTTONS, totalPages) }).map((_, index) => {
                return index + firstButtonNumber;
            }).map((page) => {
                if (page === currentPage && page <= totalPages) {
                    return <StyledButton selected={true} key={page} onClick={() => props.setOffset((page - 1) * props.limit)}>{page}</StyledButton>
                }
                else if(page <= totalPages) {
                    return <StyledButton selected={false} key={page} onClick={() => props.setOffset((page - 1) * props.limit)}>{page}</StyledButton>
                }
            })}
        </StyledDiv>

    )


}

const StyledDiv = styled.div`
display:flex;
gap: 5px;
`

const StyledButton = styled.button<{ selected: boolean }>`
border:none;
background-color:${props => props.selected ? props.theme.colors.primary : props.theme.colors.secundary};
border-radius:4px;
padding:5px;
cursor:pointer;
color: ${props => props.theme.colors.text}
`