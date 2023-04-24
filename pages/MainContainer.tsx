const MainContainer = (props: any) => {
    return(
        <div  className='bg-zinc-900 pt-24 min-h-screen'>
            {props.children}
        </div>
    )
}

export default MainContainer;