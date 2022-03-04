import styled from 'styled-components'

const Container = styled.div`
 height: 30px;
 color:red;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 14px;
 text-align: center;
`

export const Announcement = () => {
    return (
        <Container>
            €100 OFF YOUR FIRST ORDER OF €400+ <br></br>
            Code: LAMPOONEW22
        </Container>
    )
}
