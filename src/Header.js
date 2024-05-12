import React from 'react';



const PageLayout = () => {
    return (
        <div>
            <header>
                <nav style={{ paddingLeft: '25%', paddingRight: '25%' }}>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <style jsx>{`
                header {
                    background-color: #333;
                    padding: 20px;
                    color: #fff;
                }

                ul {
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: space-between;
                }

                li {
                    margin-right: 20px;
                }

                a {
                    color: #fff;
                    text-decoration: none;
                }
            `}</style>
        </div>
    );
};

export default PageLayout;