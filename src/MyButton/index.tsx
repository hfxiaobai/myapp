import React, {
  useEffect,
  useState,
  useCallback,
  useRef,
  MutableRefObject,
} from 'react';

export interface IMyButtonProps {
  /**
   * @description 传递ID
   */
  id: number;
  /**
   * @description 点击函数
   */
  handleClick: Function;
  /**
   * @description 设置组件class
   */
  className?: string;
}

const MyButton: React.FC<IMyButtonProps> = props => {
  const [text, setText] = useState('小白');

  const onHandleClick = useCallback(()=>{
    const { id, handleClick } = props;
    handleClick && handleClick(id);
  }, [])
  return (
    <div className={props.className}>
      <p>id: {props.id}</p>
      <button onClick={onHandleClick}>{text}</button>
    </div>
  )
}

export default MyButton;
