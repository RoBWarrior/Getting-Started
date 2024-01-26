import logo from './logo.svg';
import './App.css';
import 'remixicon/fonts/remixicon.css';
import React, { useRef } from 'react';

function App() {
    const item1Ref = useRef(null);
    const item2Ref = useRef(null);
    const clickContent1 = () => {
        let link1 = document.querySelector(".extended-level-0 .Modes li:first-child a");

        if (item1Ref.current.style.display === "none" || item1Ref.current.style.display === "") {
            item1Ref.current.style.display = "block";
            item1Ref.current.style.opacity = "1";
            item2Ref.current.style.marginLeft = "0px";
            link1.style.color = "black";
            link1.style.fontWeight = "700";
        }
        else {
            item1Ref.current.style.display = "none";
            item2Ref.current.style.marginLeft = "190px";
            item1Ref.current.style.opacity = "0";
            link1.style.color = "white";
            link1.style.fontWeight = "700";
        }
    };
    const clickContent2 = () => {
        let link2 = document.querySelector(".extended-level-0 .Modes li:last-child a");

        if (item2Ref.current.style.display === "none" || item2Ref.current.style.display === "") {
            item2Ref.current.style.display = "block";
            item2Ref.current.style.opacity = "1";
            if (item1Ref.current.style.display === "none" || item1Ref.current.style.display === "") {
                item2Ref.current.style.marginLeft = "190px";
            } else {
                item2Ref.current.style.marginLeft = "0px";
            }
            link2.style.color = "black";
            link2.style.fontWeight = "700";
        } else {
            item2Ref.current.style.display = "none";
            item2Ref.current.style.opacity = "0";
            link2.style.color = "white";
            link2.style.fontWeight = "0";
        }
    };
    const handleLevelClick = (levelNumber) => {
        const clickedExtendedLevel = document.querySelector(`.extended-level-${levelNumber}`);
        const allExtendedLevels = document.querySelectorAll('[class^="extended-level"]');
        const allLevels = document.querySelectorAll('[class^="level-"]');

        clickedExtendedLevel.style.display = (clickedExtendedLevel.style.display === 'none') ? 'block' : 'none';

        allExtendedLevels.forEach((extendedLevel) => {
            if (extendedLevel !== clickedExtendedLevel) {
                extendedLevel.style.display = 'none';
            }
        });

        if (clickedExtendedLevel.style.display === 'block') {
            allLevels.forEach((level) => {
                if (level !== clickedExtendedLevel) {
                    level.style.width = '85px';
                }
            });
        }
        else {
            allLevels.forEach((level) => {
                level.style.width = '130px';
            });
        }
    };


    return (
        <>
            <header>
                <div className="logo">
                    <img src="Recursion2.png" />
                    <h2>RECursion</h2>
                </div>
                <div className="links">
                    <ul>
                        <li><a href="Home.html" className="normal">Home</a></li>
                        <li><a href="Home.html" className="normal">Interview Experiences</a></li>
                        <li><a href="Home.html" className="normal">Getting Started</a></li>
                        <li><a href="Home.html" className="normal">Events</a></li>
                        <li><a href="Home.html" className="normal">Team</a></li>
                        <a href="Home.html" class="loglinker"><li>Login</li></a>
                    </ul>
                </div>
            </header>
            <section>
                <div class="part1">
                    <h1>Getting Started</h1>
                    <p>Whether you're a beginner or an experienced coder, this collection provides in-depth insights into algorithms and data structures crucial for competitive programming. We're dedicated to expanding our knowledge base by enhancing existing articles and adding new ones, all aimed at empowering programmers in their coding journey.</p>
                </div>
                <div class="part2">
                    <p>Take me to the articles</p>
                </div>
            </section>
            <main>
                <div id="apprentice" class="level-0" onClick={() => handleLevelClick(0)}>
                    <p class="name">APPRENTICE</p>
                </div>
                <div id="extended-apprentice" class="extended-level-0 not-click">
                    <p class="description">Level 0 <br /> APPRENTICE</p>

                    <ul class="Modes">
                        <li><a href="#" onClick={clickContent1}><i class="ri-arrow-right-s-line"></i>Basics of C++</a></li>
                        <li><a href="#" onClick={clickContent2}><i class="ri-arrow-right-s-line"></i>Mathematics</a></li>
                    </ul>
                    <div class="links-level">
                        <div class="content-1" id="items-1" ref={item1Ref}>
                            <ul>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Introduction to C++</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Datatypes</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Input/Output</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Operators in C++</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Decision Making</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Loops in C++</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Functions</a></li>
                            </ul>
                        </div>

                        <div class="content-2" id="items-2" ref={item2Ref}>
                            <ul>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Modular Arithmetic</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Inclusion-Exclusion</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Combinatorics</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Probability</a></li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div id="initiated" class="level-1" onClick={() => handleLevelClick(1)}>
                    <p class="name">INITIATED</p>
                </div>
                <div class="extended-level-1 not-click">
                    <p class="description">Level 1 <br /> INITIATED</p>

                    <ul class="Modes">
                        <li><a href="#" onClick="clickContent3()"><i class="ri-arrow-right-s-line"></i>Number Theory</a></li>
                        <li><a href="#" onClick="clickContent4()"><i class="ri-arrow-right-s-line"></i>Mathematics</a></li>
                    </ul>
                    <div class="links-level">
                        <div class="content-1" id="items-3">
                            <ul>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>GCD</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Sieve</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>LDE</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>CRT</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Fermat's Theorem</a></li>
                            </ul>
                        </div>

                        <div class="content-2" id="items-4">
                            <ul>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Operations and Arithmetic</a></li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div id="trained" class="level-2" onClick={() => handleLevelClick(2)}>
                    <p class="name">TRAINED</p>
                </div>
                <div class="extended-level-2 not-click">
                    <p class="description">Level 2 <br /> TRAINED</p>

                    <ul class="Modes">
                        <li><a href="#" ><i class="ri-arrow-right-s-line"></i>Balanced Trees</a></li>
                        <li><a href="#" ><i class="ri-arrow-right-s-line"></i>Searching</a></li>
                        <li><a href="#" ><i class="ri-arrow-right-s-line"></i>Sorting</a></li>
                        <li><a href="#" ><i class="ri-arrow-right-s-line"></i>Hashing</a></li>
                    </ul>
                    <div class="links-level">
                        <div class="content-1" id="items-3">
                            <ul>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Binary Search Trees</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>AVL Trees</a></li>
                            </ul>
                        </div>

                        <div class="content-2" id="items-4">
                            <ul>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Linear Search</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Binary Search</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Lower Bound & Upper Bound</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Ternary Search</a></li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div id="able" class="level-3" onClick={() => handleLevelClick(3)}>
                    <p class="name">ABLE</p>
                </div>
                <div class="extended-level-3 not-click">
                    <p class="description">Level 3 <br /> ABLE</p>

                    <ul class="Modes">
                        <li><a href="#" ><i class="ri-arrow-right-s-line"></i>Balanced Trees</a></li>
                        <li><a href="#" ><i class="ri-arrow-right-s-line"></i>Searching</a></li>
                        <li><a href="#" ><i class="ri-arrow-right-s-line"></i>Sorting</a></li>
                        <li><a href="#" ><i class="ri-arrow-right-s-line"></i>Hashing</a></li>
                    </ul>
                    <div class="links-level">
                        <div class="content-1" id="items-3">
                            <ul>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Binary Search Trees</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>AVL Trees</a></li>
                            </ul>
                        </div>

                        <div class="content-2" id="items-4">
                            <ul>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Linear Search</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Binary Search</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Lower Bound & Upper Bound</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Ternary Search</a></li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div id="competent" class="level-4" onClick={() => handleLevelClick(4)}>
                    <p class="name">COMPETENT</p>
                </div>
                <div class="extended-level-4 not-click">
                    <p class="description">Level 4 <br /> COMPETENT</p>

                    <ul class="Modes">
                        <li><a href="#" ><i class="ri-arrow-right-s-line"></i>Balanced Trees</a></li>
                        <li><a href="#" ><i class="ri-arrow-right-s-line"></i>Searching</a></li>
                        <li><a href="#" ><i class="ri-arrow-right-s-line"></i>Sorting</a></li>
                        <li><a href="#" ><i class="ri-arrow-right-s-line"></i>Hashing</a></li>
                    </ul>
                    <div class="links-level">
                        <div class="content-1" id="items-3">
                            <ul>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Binary Search Trees</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>AVL Trees</a></li>
                            </ul>
                        </div>

                        <div class="content-2" id="items-4">
                            <ul>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Linear Search</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Binary Search</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Lower Bound & Upper Bound</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Ternary Search</a></li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div id="experienced" class="level-5" onClick={() => handleLevelClick(5)}>
                    <p class="name">EXPERIENCED</p>
                </div>
                <div class="extended-level-5 not-click">
                    <p class="description">Level 5 <br /> EXPERIENCED</p>

                    <ul class="Modes">
                        <li><a href="#" ><i class="ri-arrow-right-s-line"></i>Balanced Trees</a></li>
                        <li><a href="#" ><i class="ri-arrow-right-s-line"></i>Searching</a></li>
                        <li><a href="#" ><i class="ri-arrow-right-s-line"></i>Sorting</a></li>
                        <li><a href="#" ><i class="ri-arrow-right-s-line"></i>Hashing</a></li>
                    </ul>
                    <div class="links-level">
                        <div class="content-1" id="items-3">
                            <ul>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Binary Search Trees</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>AVL Trees</a></li>
                            </ul>
                        </div>

                        <div class="content-2" id="items-4">
                            <ul>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Linear Search</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Binary Search</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Lower Bound & Upper Bound</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Ternary Search</a></li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div id="proficient" class="level-6" onClick={() => handleLevelClick(6)}>
                    <p class="name">PROFICIENT</p>
                </div>
                <div class="extended-level-6 not-click">
                    <p class="description">Level 6 <br /> PROFICIENT</p>

                    <ul class="Modes">
                        <li><a href="#" ><i class="ri-arrow-right-s-line"></i>Balanced Trees</a></li>
                        <li><a href="#" ><i class="ri-arrow-right-s-line"></i>Searching</a></li>
                        <li><a href="#" ><i class="ri-arrow-right-s-line"></i>Sorting</a></li>
                        <li><a href="#" ><i class="ri-arrow-right-s-line"></i>Hashing</a></li>
                    </ul>
                    <div class="links-level">
                        <div class="content-1" id="items-3">
                            <ul>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Binary Search Trees</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>AVL Trees</a></li>
                            </ul>
                        </div>

                        <div class="content-2" id="items-4">
                            <ul>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Linear Search</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Binary Search</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Lower Bound & Upper Bound</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Ternary Search</a></li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div id="specialist" class="level-7" onClick={() => handleLevelClick(7)}>
                    <p class="name">SPECIALIST</p>
                </div>
                <div class="extended-level-7 not-click">
                    <p class="description">Level 7 <br /> SPECIALIST</p>

                    <ul class="Modes">
                        <li><a href="#" ><i class="ri-arrow-right-s-line"></i>Balanced Trees</a></li>
                        <li><a href="#" ><i class="ri-arrow-right-s-line"></i>Searching</a></li>
                        <li><a href="#" ><i class="ri-arrow-right-s-line"></i>Sorting</a></li>
                        <li><a href="#" ><i class="ri-arrow-right-s-line"></i>Hashing</a></li>
                    </ul>
                    <div class="links-level">
                        <div class="content-1" id="items-3">
                            <ul>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Binary Search Trees</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>AVL Trees</a></li>
                            </ul>
                        </div>

                        <div class="content-2" id="items-4">
                            <ul>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Linear Search</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Binary Search</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Lower Bound & Upper Bound</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Ternary Search</a></li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div id="expert" class="level-8" onClick={() => handleLevelClick(8)}>
                    <p class="name">EXPERT</p>
                </div>
                <div class="extended-level-8 not-click">
                    <p class="description">Level 8 <br /> EXPERT</p>

                    <ul class="Modes">
                        <li><a href="#" ><i class="ri-arrow-right-s-line"></i>Balanced Trees</a></li>
                        <li><a href="#" ><i class="ri-arrow-right-s-line"></i>Searching</a></li>
                        <li><a href="#" ><i class="ri-arrow-right-s-line"></i>Sorting</a></li>
                        <li><a href="#" ><i class="ri-arrow-right-s-line"></i>Hashing</a></li>
                    </ul>
                    <div class="links-level">
                        <div class="content-1" id="items-3">
                            <ul>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Binary Search Trees</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>AVL Trees</a></li>
                            </ul>
                        </div>

                        <div class="content-2" id="items-4">
                            <ul>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Linear Search</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Binary Search</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Lower Bound & Upper Bound</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Ternary Search</a></li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div id="master" class="level-9" onClick={() => handleLevelClick(9)}>
                    <p class="name">MASTER</p>
                </div>
                <div class="extended-level-9 not-click">
                    <p class="description">Level 9 <br /> MASTER</p>

                    <ul class="Modes">
                        <li><a href="#" ><i class="ri-arrow-right-s-line"></i>Balanced Trees</a></li>
                        <li><a href="#" ><i class="ri-arrow-right-s-line"></i>Searching</a></li>
                        <li><a href="#" ><i class="ri-arrow-right-s-line"></i>Sorting</a></li>
                        <li><a href="#" ><i class="ri-arrow-right-s-line"></i>Hashing</a></li>
                    </ul>
                    <div class="links-level">
                        <div class="content-1" id="items-3">
                            <ul>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Binary Search Trees</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>AVL Trees</a></li>
                            </ul>
                        </div>

                        <div class="content-2" id="items-4">
                            <ul>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Linear Search</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Binary Search</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Lower Bound & Upper Bound</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Ternary Search</a></li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div id="professional" class="level-10" onClick={() => handleLevelClick(10)}>
                    <p class="name">PROFESSIONAL</p>
                </div>
                <div class="extended-level-10 not-click">
                    <p class="description">Level 10 <br /> PROFESSIONAL</p>

                    <ul class="Modes">
                        <li><a href="#" ><i class="ri-arrow-right-s-line"></i>Balanced Trees</a></li>
                        <li><a href="#" ><i class="ri-arrow-right-s-line"></i>Searching</a></li>
                        <li><a href="#" ><i class="ri-arrow-right-s-line"></i>Sorting</a></li>
                        <li><a href="#" ><i class="ri-arrow-right-s-line"></i>Hashing</a></li>
                    </ul>
                    <div class="links-level">
                        <div class="content-1" id="items-3">
                            <ul>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Binary Search Trees</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>AVL Trees</a></li>
                            </ul>
                        </div>

                        <div class="content-2" id="items-4">
                            <ul>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Linear Search</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Binary Search</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Lower Bound & Upper Bound</a></li>
                                <li><a href="#"><i class="ri-arrow-right-line"></i>Ternary Search</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default App;
