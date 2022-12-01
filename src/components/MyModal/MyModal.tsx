import React, {FC, PropsWithChildren} from "react";
import styles from './MyModal.module.scss'

interface Props {
    children: React.ReactNode;
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const MyModal: FC<Props>= ({children,visible,setVisible}) => {

    const rootClasses = [styles.MyModal]
    if (visible){
        rootClasses.push(styles.active)
    }
    return(
        <div className={rootClasses.join(' ')} onClick={()=> setVisible(false) }>
            <div className={styles.MyModal__content} onClick={(e)=> e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}
export default MyModal