import { css } from "styled-components";


export const mobile = (props) => {

          return css`

                    @media only screen and (min-width: 380px) {
                              ${props}
                    }
          `
          ;

};

export const tablet = (props) => {

          return css`

                    @media only screen and (min-width: 768px) {
                              ${props}
                    }
          `
          ;

};

export const laptop = (props) => {

          return css`

                    @media only screen and (min-width: 1020px) {
                              ${props}
                    }
          `
          ;

};