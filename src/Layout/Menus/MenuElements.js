import styled from 'styled-components'

export const MenuContainer = styled.div`
  min-height: 50vh;
  margin: 80px 50px;

  h1 {
    font-size: 3rem;
    margin-bottom: 3rem;
  }

  .nav {
    background-color: #100966;
    border-radius: 10px;

    @media screen and (max-width: 600px) {
      margin-bottom: 2rem;
    }
  }

  .nav-pills .nav-link.active,
  .nav-pills .show > .nav-link {
    background-color: white !important;
  }

  .nav-link {
    color: white !important;
  }

  .nav-link.active {
    color: black !important;
  }

  .nav-item {
    margin: 0 15px 0 15px;
  }
`

export const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  .btn {
    background: #100966;
    border: none;
  }

  .card-shadow {
    border-radius: 15px;
    border: none;
    -webkit-box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.2);
    -mox-box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.2);
    -box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.2);
  }
`
