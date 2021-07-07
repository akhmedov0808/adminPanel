import React, {useEffect} from 'react'
import '../static/Navbar.css';
import {NavLink, useHistory} from 'react-router-dom';
import $ from 'jquery';
import {signOut} from "../utils/auth";
import Button from "../components/common/Button";


export default function Navbar() {

    function animation() {
        let tabsNewAnim = $('#navbarSupportedContent');
        let activeItemNewAnim = tabsNewAnim.find('.active');
        let activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
        let activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
        let itemPosNewAnimTop = activeItemNewAnim.position();
        let itemPosNewAnimLeft = activeItemNewAnim.position();
        $(".hori-selector").css({
            "top": itemPosNewAnimTop.top + "px",
            "left": itemPosNewAnimLeft.left + "px",
            "height": activeWidthNewAnimHeight + "px",
            "width": activeWidthNewAnimWidth + "px"
        });
        $("#navbarSupportedContent").on("click", "li", function (e) {
            $('#navbarSupportedContent ul li').removeClass("is-active");
            $(this).addClass('is-active');
            let activeWidthNewAnimHeight = $(this).innerHeight();
            let activeWidthNewAnimWidth = $(this).innerWidth();
            let itemPosNewAnimTop = $(this).position();
            let itemPosNewAnimLeft = $(this).position();
            $(".hori-selector").css({
                "top": itemPosNewAnimTop.top + "px",
                "left": itemPosNewAnimLeft.left + "px",
                "height": activeWidthNewAnimHeight + "px",
                "width": activeWidthNewAnimWidth + "px"
            });
        });
    }

    useEffect(() => {

        animation();
        $(window).on('resize', function () {
            setTimeout(function () {
                animation();
            }, 500);
        });

    }, []);

    const history = useHistory()

    function logOut() {
        signOut(history)
    }
    return (
        <nav className="navbar navbar-mainbg">
            <span
                onClick={function () {
                    setTimeout(function () {
                        animation();
                    });
                }}
                type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            </span>

            <div id="navbarSupportedContent">
                <ul className="navbar-nav ml-6">

                    <div className="hori-selector">
                        <div className="left"></div>
                        <div className="right"></div>
                    </div>

                    <li className="nav-item is-active">
                        <NavLink to="/faculty" exact>
                            <span className='is-size-5'>Faculties</span>
                        </NavLink>
                    </li>

                    <li className="nav-item is-active">
                        <NavLink to="/department" exact>
                            <span className='is-size-5'>Departments</span>
                        </NavLink>
                    </li>

                    <li className='is-active'>
                        <NavLink to="/group" exact>
                            <span className='is-size-5'>Groups</span>
                        </NavLink>
                    </li>
                    <li className='is-active'>
                        <NavLink to="/student" exact>
                            <span className='is-size-5'>Students</span>
                        </NavLink>
                    </li>
                    <li className='is-active'>
                        <NavLink to="/teacher" exact>
                            <span className='is-size-5'>Teachers</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="" exact>
                            <span className='is-size-5'></span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="navbar-end">
                <Button
                    className='button is-white mt-3 mr-6'
                    onClick={logOut}
                    text="Log out"
                    icon="log-out-outline"/>
            </div>
        </nav>
    )
}
