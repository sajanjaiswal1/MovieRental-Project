import React from 'react'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'

export const addToCart = (cart_items) => (dispatch)=>{

    
    Swal.fire({
            title:'Confirm?',
            text:`You are about to rent this movie`,
            icon:'question',
            showCancelButton: true,
            cancelButtonColor: "#ff0000"
        })
        .then(Result=>{
            if(Result.isConfirmed){
                Swal.fire({
                    title:'Confirmed',
                    text:'Movie Rented',
                    icon: 'success'
                })
                dispatch({type:"ADD_TO_CART", payload:cart_items})
                
            }
            else{
                Swal.fire('Cancelled',"Cancelled", 'info')
            }
        })
  
}

export const removeFromCart = cartId => dispatch =>{
    Swal.fire({
        title:'Confirm?',
        text:`Are You sure? You want to remove this movie?`,
        icon:'question',
        showCancelButton: true,
        cancelButtonColor: "#ff0000"

    })
    .then(Result=>{
        if(Result.isConfirmed){
            dispatch({type:"REMOVE_FROM_CART",payload:cartId})
            Swal.fire({
                title:'congrats',
                text:'Movie Removed',
                icon: 'success'
            })
        }
        else{
            Swal.fire('Cancelled',"Cancelled", 'info')
        }
    })
}
