import { Fade } from 'react-awesome-reveal'
import { MdAttachMoney, MdMoneyOff } from "react-icons/md";

import { useExpense } from '../../hooks/useExpense'
import { useNavigate } from 'react-router-dom'
import { IoCloseOutline } from "react-icons/io5";

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import './NavBar.css'
import { formatCurrency } from '../../helpers';

type NavBarProps = {
    showMenu: boolean
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export const NavBar = ({ showMenu, setShowMenu }: NavBarProps) => {

    const navigate = useNavigate();
    const {dispatch, budgetMoney, spentTotalMoney, expensetMoney } = useExpense();

    const handleReset = () => {
        dispatch({ type: 'reset-app' });
        navigate('/')
    }

    const handleCloseMenu = () => {
        setShowMenu(false);
    }

    const percentage = (( spentTotalMoney / budgetMoney ) * 100).toFixed(1);

    const pathColorBar = (percentage : number) => {
        if (percentage <= 30) {
            return '#f63b3b'
        }
        if (percentage <= 50) {
            return '#f2e71a'
        }
        if(percentage > 50){
            return '#08CD42';
        }
    }

    return (
        <Fade triggerOnce={true} direction='left' duration={1000}>
            <nav className={`nav ${showMenu ? 'show-menu' : 'close-menu'}`}>

                <IoCloseOutline
                    className='close-icon'
                    onClick={handleCloseMenu}
                />

                <div>
                    <figure className='graf-cont'>
                        <CircularProgressbar 
                            value={+percentage} 
                            text={`${percentage}%`} 

                            styles={buildStyles({
                                trailColor: '#2b2b2b',
                                pathColor: `${pathColorBar(+percentage)}`,
                                textColor: `${pathColorBar(+percentage)}`
                            })}

                            className='progress-bar'
                        />;
                    </figure>

                    <div className='money-div'>
                        <div className='money-cont'>
                            <MdAttachMoney className='ico ico-dis' />
                            <p className='mon-p'>Budget: {''}
                                <span className='amount'>{formatCurrency(budgetMoney)}</span>
                            </p>
                        </div>

                        <div className='money-cont'>
                            <MdAttachMoney className='ico ico-ava' />
                            <p className='mon-p'>Available: {''}
                                <span className='amount'>{formatCurrency(spentTotalMoney)}</span>
                            </p>
                        </div>

                        <div className='money-cont'>
                            <MdMoneyOff className='ico ico-spent' />
                            <p className='mon-p'>Spent: {''}
                                <span className='amount'>{formatCurrency(expensetMoney)}</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <button
                        className='reset-btn'
                        onClick={handleReset}
                    >
                        Reset App
                    </button>
                </div>
            </nav>
        </Fade>
    )
}
