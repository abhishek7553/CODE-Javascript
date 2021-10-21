import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import RemoveIcon from '@material-ui/icons/Remove';
import SearchIcon from '@material-ui/icons/Search';
import Row from '../Row/Row'

import './Content.css'

const Content = () => {
    return (
        <div className='content'>

            <div className="content__box">

                <div className="content__boxHeader">

                    <div className="content__predict">
                        <p className='content__predictP'>Predict</p>
                    </div>

                    <div className="content__correspondance">
                        <p className='content__correspondanceP'>View Correspondance</p>
                    </div>

                </div>

                <div className="content__other">

                    <div className="content__add">
                        <AddIcon className='content__addIcon' />
                        <p className='content__addButton'>Add</p>
                    </div>

                    <div className="content__edit">
                        <EditIcon className='content__editIcon' />
                        <p className='content__editButton'>Edit</p>
                    </div>

                    <div className="content__minimize">
                        <RemoveIcon className='content__minimizeIcon' />
                        <p className='content__minimizeButton'>Delete</p>
                    </div>

                    <div className="content__searchBox">
                        <input className='content__search' type="search" placeholder='Search by Invoice Number' />
                        <SearchIcon className='content__searchIcon' />
                    </div>

                </div>

            </div>

            <Row
                name="Andrea James"
                id="2523532"
                invoice="73457346735"
                amount="122.87K"
                duedate="23-Jan-2021"
                paymentDate="--"
                agingBucket="--"
                notes="Lorem Ipsum dolor..."
            />
        </div>
    )
}

export default Content
