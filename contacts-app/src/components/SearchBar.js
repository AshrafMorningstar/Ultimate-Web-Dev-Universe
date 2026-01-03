/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

import React from "react";
import PropTypes from "prop-types";
import { LocaleConsumer } from "../contexts/LocaleContext";
function SearchBar({ keyword, keywordChange }) {
    return (
        <LocaleConsumer>
            {({ locale }) => {
                return (
                    <input
                        type="text"
                        className="search-bar"
                        placeholder={
                            locale === "id"
                                ? "Cari berdasarkan nama"
                                : "Search by name"
                        }
                        value={keyword}
                        onChange={(e) => keywordChange(e.target.value)}
                    />
                );
            }}
        </LocaleConsumer>
    );
}
SearchBar.propTypes = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
