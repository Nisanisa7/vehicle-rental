import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import Navbar_Bf_Login from '../components/navbar_bf_login'

export default function Home() {
  return (
    <Styles>
      <Navbar_Bf_Login/>
    </Styles>
  )
}
const Styles = styled.div`

`