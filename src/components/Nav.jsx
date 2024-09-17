import Header from "./Header";

export const Nav = ({topics}) => {

    return (
        <div className="navbar">
            <Header />
            <nav>
                {topics.map((topic, index) => {
                    return <p key={index}>{topic.slug}</p>
                })}
            </nav>
        </div>
    )
}

export default Nav;