import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../assets/Redux/cartAction'

const Cart = () => {
    let cart_items = useSelector(store => store.cartStore.cart_items)

    const dispatch = useDispatch()

    const handleRemove = (cartId) => e => {
        e.preventDefault()
        dispatch(removeFromCart(cartId))
    }

    return (
        <>
            {

                cart_items.length > 0 ?
                    <>
                        <h1 className='text-2xl text-center underline p-2 font-semibold'>My Cart Items</h1>
                        <table className='w-3/4 bg-neutral-300 mx-auto font-semibold shadow-md'>
                            <thead>
                                <tr className='bg-zinc-400'>
                                    <th>S.No.</th>
                                    <th colSpan={2}>Movie</th>
                                    <th>Date</th>
                                    <th>Days</th>
                                    {/* <th>Total Cost</th> */}
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart_items.map((cart_item, i) => {
                                        console.log(cart_item)
                                        return <tr key={i}>
                                            <td className='bg-rose-200'>{i + 1}</td>
                                            <td>
                                                <img src={cart_item.image} alt="" className='w-16' />
                                            </td>
                                            <td>{cart_item.title}</td>
                                            <td className='bg-rose-200'>{cart_item.date}</td>
                                            <td>{cart_item.no_of_day}</td>
                                            {/* <td className='bg-rose-200'>${(cart_item.year/100*cart_item.no_of_day).toLocaleString()}</td> */}
                                            <td><button onClick={handleRemove(cart_item.cart_id)} className='text-black bg-gradient-to-t from-gray-400 via-rose-100 to-blue-300  rounded-md px-2.5 py-1 hover:from-blue-200 hover:to-gray-200 hover:transform transition-all hover:scale-110'>Remove</button></td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </>
                    :
                    <div>No items in cart</div>
            }
        </>
    )
}

export default Cart