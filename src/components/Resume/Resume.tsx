import { MdSavings } from "react-icons/md";
import { FaHome, FaPlay } from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";

import './Resume.css'
import { useExpense } from "../../hooks/useExpense";

export const Resume = () => {

    const {state} = useExpense();

    const totalsByCategory = state.expenses.reduce<Record<string, number>>((totals, expense) => {
        const { category } = expense;
        if (!totals[category]) {
            totals[category] = 0;
        }
        totals[category] += 1;
        return totals;
    }, {});

    return (
        <div className='resume-panel'>
            <p className='resume-title'>Resume expenses</p>

            <div className="cards-resume">
                <div className="cards-1">
                    <div className="card card-saving">
                        <div className="bg-ico">
                            <MdSavings className="icon-card icon-saving" />
                            <p className="prg prg-saving">Saving</p>
                        </div>
                        <p className="number number-saving font-bold">{totalsByCategory["1"] || 0}</p>
                    </div>

                    <div className="card card-hl">
                        <div className="bg-ico">
                            <GiHealthNormal className="icon-card icon-hl" />
                            <p className="prg prg-hl">Health</p>
                        </div>
                        <p className="number number-hl font-bold">{totalsByCategory["6"] || 0}</p>
                    </div>
                </div>

                <div className="cards-2">
                    <div className="card card-home">
                        <div className="bg-ico">
                            <FaHome className="icon-card icon-home" />
                            <p className="prg prg-home">Home</p>
                        </div>
                        <p className="number number-home font-bold">{totalsByCategory["3"] || 0}</p>
                    </div>

                    <div className="card card-pl">
                        <div className="bg-ico">
                            <FaPlay className="icon-card icon-pl" />
                            <p className="prg prg-pl">Subs</p>
                        </div>
                        <p className="number number-pl font-bold">{totalsByCategory["7"] || 0}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
