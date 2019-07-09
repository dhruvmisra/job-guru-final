<template>
    <div>
        <div class="row my-2 pl-5">
            <span>JobGuru &copy; </span>
            <span> | All rights reserved</span>

            <div class="ml-auto">
                <router-link to="/case-studies" tag="span" class="link">
                    <span>Case Studies</span>
                </router-link>
                <span> | </span>
                <router-link to="/about-us" tag="span" class="link">
                    <span>About Us & Contact Us</span>
                </router-link>
                <span> | </span>
            </div>
        </div>
    </div>
</template>

<style>
    .row {
        font-size: 0.9em;
    }
    .link {
        color: gray;
        cursor: pointer;
    }

</style>

