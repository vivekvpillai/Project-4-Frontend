import React, { useState, useEffect,  } from 'react'
import moment from 'moment'
import { Bar } from 'react-chartjs-2'

const Chart = (props) => {

    let [dateArr, setDataArr] = useState([])
    // console.log(dateArr);
    let [calArr, setCalArr] = useState([])
    // console.log(calArr);

    const findChartData = () => {
        let tempDateArr = []
        let tempCalArr = []
        for (let i = 0; i < props.userEntries.length; i++) {
            let date = (moment(props.userEntries[i].created_at).format('MM-DD-YYYY'))
            if (!tempDateArr.includes(date)) {
                tempDateArr.push(date)
            }
        }

        for (let i = 0; i < tempDateArr.length; i ++){
            let sum = 0
            for (let j = 0; j < props.userEntries.length; j++){
                let date = (moment(props.userEntries[j].created_at).format('MM-DD-YYYY'))
                if (date === tempDateArr[i]) {
                    sum += props.userEntries[j].calories
                    // console.log(sum);
                }
            }
            tempCalArr.push(sum)
            console.log(tempDateArr);
            console.log(tempCalArr);
        }
        setDataArr(tempDateArr)
        setCalArr(tempCalArr)
    }

    useEffect(() => {
        findChartData()
    }, [props.userEntries])

    return (
        <div className = "barChart">
            <Bar
                data = {{
                    labels: dateArr,
                    datasets: [
                        {
                            label: '# of calories',
                            data: calArr,
                            backgroundColor: 'gainsboro'
                        }
                    ]
                }}
                height={900}
                width={900}
                options={{
                    maintainAspectRatio: false,
                }}
            />
        </div>
    )
}

export default Chart
