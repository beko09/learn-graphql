import { gql } from "@apollo/client";

export const GET_ALL_CONTINENTS = gql`
query getContinents{
    continents{
    code
    name
    countries {
            code
            name
            capital
            emoji
            }
    }
}

`;

export const GET_COUNTRY = gql`
query getCountry($code:ID!){
country(code:$code){
  code
  name
	native
  phone
  continent {
    code
    name
  }
  capital
  currency
  languages {
    code
    name
    rtl
  }
  emoji
  states {
    code
    name
    country {
      code
      name
    }
  }
}
}
`