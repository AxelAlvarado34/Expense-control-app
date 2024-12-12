import { useState } from "react";

import { NavBar } from "../NavBar/NavBar"
import { IoIosMenu } from "react-icons/io";

import { Resume } from "../Resume/Resume";
import { ExpenseForm } from "../ExpenseForm/ExpenseForm";
import { Fade } from "react-awesome-reveal";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Dashboard.css'
import { ListExpense } from "../ListExpense/ListExpense";

export const DashBoard = () => {

    const [showMenu, setShowMenu] = useState(false);

    const handleMenu = () => {
        setShowMenu(true);
    }

    return (
        <div className="dashboard">

            <ToastContainer />

            <IoIosMenu
                className={`menu-icon ${showMenu && 'disable-menu'}`}
                onClick={handleMenu}
            />

            <div className="control-content">
                <NavBar
                    showMenu={showMenu}
                    setShowMenu={setShowMenu}
                />
            </div>

            <div className="expenses-content">

                <div className="block-1">
                    <div className="resume-content">
                        <Fade triggerOnce={true} direction="down" duration={2000} className="res-fade">
                            <Resume />
                        </Fade>
                    </div>

                    <div className="form-content">
                        <Fade triggerOnce={true} direction="down" duration={2300} className="for-fade">
                            <ExpenseForm />
                        </Fade>
                    </div>
                </div>

                <div className="list-content">
                    <Fade triggerOnce={true} direction="up" duration={2300} className="list-fade">
                        <ListExpense />
                    </Fade>
                </div>

            </div>
        </div>
    )
}
