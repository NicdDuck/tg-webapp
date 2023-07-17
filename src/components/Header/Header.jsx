import React from "react"

const Header = () => {
    const tg = window.Telegram.WebApp

    const onClose = () => {
      tg.close()
    }
    return(
        <div className={"header"}>
            <Button onClick={onClose}>закрыть</Button>
            <span className="username">
                {tg.initDataUnsage?.user?.username}
            </span>
        </div>
    )
}

export default Header