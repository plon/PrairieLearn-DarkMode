// ==UserScript==
// @name         PrairieLearn Dark Mode
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  Dark mode for PrairieLearn
// @author       plon
// @match        https://us.prairielearn.com/*
// @grant        none
// @license      MIT
// @run-at       document-start
// ==/UserScript==
 
(function() {
    'use strict';
 
    const darkModeStyles = `
        :root {
            --pl-dark-bg-primary: #1a1a1a;
            --pl-dark-bg-secondary: #222222;
            --pl-dark-bg-tertiary: #2a2a2a;
            --pl-dark-text-primary: #e0e0e0;
            --pl-dark-text-secondary: #b0b0b0;
            --pl-dark-border-color: #444444;
            --pl-dark-link-color: #4da8ff;
            --pl-dark-link-hover-color: #80bfff;
            --pl-dark-code-bg: #282c34;
            --pl-dark-code-text: #abb2bf;
            --pl-dark-disabled-bg: #333333;
            --pl-dark-disabled-text: #777777;
            --pl-dark-primary-btn-bg: #0d6efd;
            --pl-dark-secondary-btn-bg: #6c757d;
        }
 
        html {
             color-scheme: dark;
        }
        body {
            background-color: var(--pl-dark-bg-primary) !important;
            color: var(--pl-dark-text-primary) !important;
        }
 
        .card, .panel, .container, .container-fluid, header, footer, nav, main, section, article, aside,
        .modal-content, .dropdown-menu, .popover, .tooltip-inner,
        .list-group-item, .jumbotron, .navbar, .offcanvas,
        [class*="bg-light"], [class*="bg-white"] {
            background-color: var(--pl-dark-bg-secondary) !important;
            color: var(--pl-dark-text-primary) !important;
            border-color: var(--pl-dark-border-color) !important;
        }
        .pl-file-editor > .card > .card-header,
        .pl-file-editor > .card > .card-footer {
            background-color: var(--pl-dark-bg-secondary) !important;
            color: var(--pl-dark-text-primary) !important;
            border-color: var(--pl-dark-border-color) !important;
        }
 
        .modal-header, .modal-footer, .card-header, .card-footer, .offcanvas-header, .offcanvas-body {
             background-color: inherit !important;
             border-color: var(--pl-dark-border-color) !important;
        }
 
 
        h1, h2, h3, h4, h5, h6, p, span:not([class*="ace_"]), div:not([class*="ace_"]), li, label, strong, em, small, dt, dd {
            color: inherit !important;
            background-color: transparent !important;
        }
        .text-dark, .text-black, .text-body {
             color: var(--pl-dark-text-primary) !important;
        }
        .text-muted {
            color: var(--pl-dark-text-secondary) !important;
        }
 
        a {
            color: var(--pl-dark-link-color) !important;
        }
        a:hover, a:focus {
            color: var(--pl-dark-link-hover-color) !important;
        }
        .nav-link, .breadcrumb-item a, .list-group-item-action {
             color: var(--pl-dark-link-color) !important;
        }
        .nav-link:hover, .breadcrumb-item a:hover, .list-group-item-action:hover {
             color: var(--pl-dark-link-hover-color) !important;
             background-color: var(--pl-dark-bg-tertiary) !important;
        }
        .btn-link {
             color: var(--pl-dark-link-color) !important;
             text-decoration: underline !important;
        }
        .btn-link:hover {
             color: var(--pl-dark-link-hover-color) !important;
        }
        .breadcrumb {
            background-color: var(--pl-dark-bg-secondary) !important;
            color: var(--pl-dark-text-secondary) !important;
        }
         .breadcrumb-item.active {
            color: var(--pl-dark-text-secondary) !important;
        }
 
        button, input, select, textarea, .form-control, .form-select, .form-check-label, .input-group-text {
            background-color: var(--pl-dark-bg-tertiary) !important;
            color: var(--pl-dark-text-primary) !important;
            border: 1px solid var(--pl-dark-border-color) !important;
        }
        .form-check-input {
            background-color: var(--pl-dark-bg-tertiary) !important;
            border-color: var(--pl-dark-border-color) !important;
        }
        .form-check-input:checked {
            background-color: var(--pl-dark-link-color) !important;
            border-color: var(--pl-dark-link-color) !important;
        }
        input::placeholder, textarea::placeholder {
            color: var(--pl-dark-text-secondary) !important;
            opacity: 0.7 !important;
        }
        input:disabled, textarea:disabled, button:disabled, select:disabled, .form-control:disabled, .form-select:disabled {
            background-color: var(--pl-dark-disabled-bg) !important;
            color: var(--pl-dark-disabled-text) !important;
            opacity: 0.7 !important;
            cursor: not-allowed !important;
        }
        .form-control-plaintext {
             color: var(--pl-dark-text-primary) !important;
             background-color: transparent !important;
             border-color: transparent !important;
        }
 
        .btn {
            border-color: var(--pl-dark-border-color) !important;
            color: var(--pl-dark-text-primary) !important;
        }
        .btn-light, .btn-secondary {
             background-color: #444 !important;
             border-color: #555 !important;
             color: var(--pl-dark-text-primary) !important;
        }
         .btn-light:hover, .btn-secondary:hover {
             background-color: #555 !important;
             border-color: #666 !important;
        }
        .btn-primary {
             background-color: var(--pl-dark-primary-btn-bg) !important;
             border-color: #0b5ed7 !important;
             color: white !important;
        }
         .btn-primary:hover {
             background-color: #0b5ed7 !important;
             border-color: #0a58ca !important;
        }
        .btn-info {
             background-color: #1a4d5a !important;
             border-color: #2a6d7a !important;
             color: #cff4fc !important;
        }
         .btn-info:hover {
             background-color: #2a6d7a !important;
             border-color: #3aa0b8 !important;
             color: #dff6fd !important;
        }
 
        table, .table {
            background-color: var(--pl-dark-bg-tertiary) !important;
            color: var(--pl-dark-text-primary) !important;
            border-color: var(--pl-dark-border-color) !important;
        }
        th, td {
             border-color: var(--pl-dark-border-color) !important;
        }
        thead th, .table thead th {
             background-color: #303030 !important;
             color: var(--pl-dark-text-primary) !important;
             border-color: var(--pl-dark-border-color) !important;
        }
        .table-striped tbody tr:nth-of-type(odd) {
             background-color: var(--pl-dark-bg-secondary) !important;
             color: var(--pl-dark-text-primary) !important;
        }
        .table-hover tbody tr:hover {
             background-color: #353535 !important;
             color: var(--pl-dark-text-primary) !important;
        }
        .table-bordered, .table-bordered th, .table-bordered td {
             border-color: var(--pl-dark-border-color) !important;
        }
        .table-dark {
             background-color: #2c3034 !important;
             color: var(--pl-dark-text-primary) !important;
             border-color: var(--pl-dark-border-color) !important;
        }
 
        .badge {
            background-color: #555 !important;
            color: var(--pl-dark-text-primary) !important;
        }
        .badge.bg-primary, .badge-primary { background-color: var(--pl-dark-primary-btn-bg) !important; color: white !important; }
        .badge.bg-secondary, .badge-secondary { background-color: var(--pl-dark-secondary-btn-bg) !important; color: white !important; }
        .badge.bg-info, .badge-info {
             background-color: #1a4d5a !important;
             color: #cff4fc !important;
        }
 
        .alert {
            color: var(--pl-dark-text-primary) !important;
            background-color: #333 !important;
            border: 1px solid var(--pl-dark-border-color) !important;
        }
        .alert-heading { color: inherit !important; }
        .alert-link { color: var(--pl-dark-link-hover-color) !important; font-weight: bold !important; }
        .alert-primary { background-color: #052c65 !important; border-color: #06357a !important; color: #cfe2ff !important; }
        .alert-secondary { background-color: #2b2f32 !important; border-color: #3a4045 !important; color: #e2e3e5 !important; }
        .alert-success { background-color: #0a3622 !important; border-color: #0f5132 !important; color: #d1e7dd !important; }
        .alert-danger { background-color: #58151c !important; border-color: #842029 !important; color: #f8d7da !important; }
        .alert-warning { background-color: #664d03 !important; border-color: #997404 !important; color: #fff3cd !important; }
        .alert-info { background-color: #055160 !important; border-color: #066073 !important; color: #cff4fc !important; }
        .alert-light { background-color: var(--pl-dark-bg-tertiary) !important; border-color: var(--pl-dark-border-color) !important; color: var(--pl-dark-text-primary) !important; }
        .alert-dark { background-color: var(--pl-dark-bg-secondary) !important; border-color: #343a40 !important; color: var(--pl-dark-text-secondary) !important; }
        .alert-info .alert-link {
             color: #cff4fc !important;
             text-decoration: underline !important;
        }
 
        .pl-file-editor .editor span[class*="ace_"],
        .pl-file-editor .editor div[class*="ace_"] {
            color: initial !important;
            background-color: initial !important;
        }
         .pl-file-editor .editor {
             background-color: initial !important;
             color: initial !important;
             border: initial !important;
         }
         .pl-file-editor .editor .ace_gutter {
             background: initial !important;
             color: initial !important;
         }
         .pl-file-editor .editor .ace_cursor {
             color: initial !important;
         }
         .pl-file-editor .modal-content {
             background-color: var(--pl-dark-bg-secondary) !important;
             color: var(--pl-dark-text-primary) !important;
             border-color: var(--pl-dark-border-color) !important;
         }
 
 
        :not(.pl-file-editor) code,
        :not(.pl-file-editor) kbd,
        :not(.pl-file-editor) samp {
            background-color: var(--pl-dark-code-bg) !important;
            color: #d63384 !important;
            border: 1px solid var(--pl-dark-border-color) !important;
            border-radius: 3px;
            padding: 0.2em 0.4em;
        }
         :not(.pl-file-editor) a > code,
         :not(.pl-file-editor) a > kbd,
         :not(.pl-file-editor) a > samp {
             color: inherit !important;
         }
         :not(.pl-file-editor) pre {
             background-color: var(--pl-dark-code-bg) !important;
             color: var(--pl-dark-code-text) !important;
             border: 1px solid var(--pl-dark-border-color) !important;
             border-radius: 3px;
             padding: 0.8em !important;
             overflow: auto;
        }
         :not(.pl-file-editor) pre code {
             background-color: transparent !important;
             color: inherit !important;
             border: none !important;
             padding: 0 !important;
         }
 
        img, svg, [class*="fa-"], [class*="bi-"], [class*="glyphicon-"] {
            background-color: transparent !important;
        }
 
        hr, .dropdown-divider {
             border-top-color: var(--pl-dark-border-color) !important;
             opacity: 0.25 !important;
        }
        .border, .border-top, .border-bottom, .border-start, .border-end,
        .border-primary, .border-secondary, .border-success, .border-danger,
        .border-warning, .border-info, .border-light, .border-dark, .border-white {
              border-color: var(--pl-dark-border-color) !important;
        }
    `;
 
    const styleElement = document.createElement('style');
    styleElement.id = 'prairielearn-dark-mode-style';
    styleElement.textContent = darkModeStyles;
    document.head.appendChild(styleElement);
 
})();