import React, {useEffect, useState} from 'react';
import styles from './SkillsInfo.module.scss'

type SkillsInfoPropsType = {
    arrSkills: string[]
}

export function SkillsInfo(props: SkillsInfoPropsType) {

    const [skill, setSkill] = useState<string>(props.arrSkills[0])
    const arrLength = props.arrSkills.length - 1
    let i = 0

    // useEffect(() => {
    //     const intervalID = setInterval(() => {
    //         setSkill(props.arrSkills[i])
    //         if (i < arrLength) i++
    //         else i = 0
    //     }, 2000)
    //     return () => clearInterval(intervalID)
    // }, [])

    return (
        <h2 className={styles.skillsInfo}>{skill}</h2>
    )
}