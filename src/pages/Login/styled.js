import styled from 'styled-components';

export const AreaLogin = styled.div`

    display: flex;
    justify-content: space-between;

    .container-back{
        background-color:#191A24;
        width: auto;
        height: auto;

        img.desktop{
            width: 95%;
            height: 800px;
           // margin-left: 2.5%;
            margin: 20px;
        }

        img.mobile{
            display: none;
            position: absolute;
            left: 0;
            width: 100%;
        }

    }

    .container-form{
    background-color:#F4F4F4;
    padding: 50px;
    max-width: 500px;
    height: auto;
    margin: 0;
    border-radius: 2px;
    box-shadow: 0px 0px 8px #ccc;
    position: relative;
    z-index: 2;

    .marca{
        img{
            width:48px;
            height: 48px;
        }
        .logo{
        display:flex;
        gap:16px;
        align-items:center
        }
        h3{
            text-align: center;
            font-family: 'Inter', sans-serif;
            font-size: 32px;
            line-height: 32px;
            font-weight: 600;
        }
        .slogan{
            width: 347px;
            text-align: start;
            font-family: 'Inter', sans-serif;
            font-size: 20px;
            line-height: 30px;
            font-weight: 400;
        }
        h3, p{
            color:#3E334E;
        }
    }

    .form{
        label{
            color: #3E334E;
            font-family: 'Inter', sans-sarif;
            font-weight: 600;
            font-size: 16px;
            line-height: 16px;
        }
        input{
            border: 1px solid #afa2c3;
            border-radius: 8px;
            gap: 8px;
            width: 416px;
            height: 56px;   
        }
        .check{
            width: 16px;
            height: 16px;
            border: 2px solid #3e334e; 
            border-radius: 4px; 
            outline: none; 
            cursor: pointer;
        }
        .checkb{
            display: flex;
            justify-content: space-between;
            align-items:center;
            a{
                margin-left: auto;
            }
        }
        h1{
            font-weight: 600;
            color:#3E334E;
            font-family: 'Inter', sans-serif;
            font-size: 32px;
            line-height: 32px;
        }
    }

    .button{
        color: #ffffff;
        font-family: 'Inter', sans-sarif;
        font-weight: 600;
        font-size: 16px;
        line-height: 16px;
        text-align: center;
        display: flex;
        gap: 24px;
        align-items: center;
        justify-content: center;

        .login, .signup{
        padding: 16px;
        border-radius: 8px;
        width: 196px;
        height: 48px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        align-items:center;
        font-weight: 600;
        }

        .login{
            background-color: #3E334E;
            color: #ffffff;
            border: #3E334E;
        }

        .signup{
            background-color: #ffffff;
            color: #3E334E; 
            border: 1px solid #3E334E;
        }
    }

    .loginWith{
        display: flex;
        flex-direction: column;
        align-items: center;

        P{
            text-align: center;
            font-size: 14px;
            font-family: 'Inter', sans-serif;
            color: #3e334e;
        }
        .button-container{
            display: flex;
            gap: 16px;
        }
        button {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #3E334E;
            font-family: 'Inter', sans-serif;
            font-weight: 600;
            font-size: 16px;
            line-height: 16px;
            text-align: center;
            gap: 8px;
            border: 1px solid #afa2c3;
            border-radius: 4px;
            width: 128px;
            height: 38px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }
    }
}
@media (max-width: 768px){
    
    .container-back{
       img.desktop{
         display: none;
       }
       img.mobile{
         display: block;
       }
    }
    .container-form{
        width: 100%;
        padding: 20px;
        margin-top: 200px;
        max-width: 100%;
    }
    }
}
`;
