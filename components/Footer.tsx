/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';

const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-3 z-50 text-neutral-300 text-xs sm:text-sm border-t border-white/10">
            <div className="max-w-screen-xl mx-auto flex justify-center items-center gap-4 px-4">
                <p className="text-neutral-500 whitespace-nowrap">
                    Powered by Gemini 2.5 Flash Image Preview
                    {/* You can add your own credit here! For example: | Created by Your Name */}
                </p>
            </div>
        </footer>
    );
};

export default Footer;