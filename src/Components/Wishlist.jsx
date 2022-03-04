import styled from 'styled-components'
import Data from '../data.json'

const Container = styled.div`
padding: 20px;
display: flex;
justify-content: space-between;
width: 60%

`

const Item = styled.div`
flex:1
margin: 3px
height: 70vh;
position: relative;
text-align: center;
padding: 20px;
`
const Tag = styled.div`
color: #dcc850;
text-align: center;
margin: 3px
white-space: pre-wrap;
white-space: pre-line;

`

const Image = styled.img`
margin: 3px
width: 100%
`
const Designer = styled.h4`
margin: 3px
`
const Name = styled.div`
margin: 3px
`
const Size = styled.div`
margin: 3px
color: #66666;
`
const Price = styled.div`
margin: 3px

`
const Retail = styled.div`
margin: 3px;
`
const SelectSize = styled.button`
margin: 10px
`

export const Wishlist = () => {
    return (
      <div>
        <h2>Wishlist</h2>
        <Container>
            { Data.map(item => {
                return (
                    <Item>
                        <Tag>{item.is_new_with_tag ? "NEW WITH TAG" : `${"\n"}` }</Tag>
                        <Image src={item.image}/>
                        <Designer>{item.designer}</Designer> 
                        <Name>{item.name}</Name> 
                        <Size style={{color: "gray"}}>{item.sizes ? `More sizes available` : item.size}</Size>
                        <Price>€ {item.price}</Price>
                        <Retail style={{color: "gray"}}>{item.retail ? `Est. Retail: € ` : null }{item.retail}</Retail>
                        {item.sizes ? <SelectSize>Select Size</SelectSize> : null }                        
                    </Item>
                    )
                }
            )}
        </Container>
      </div>
    )
}


