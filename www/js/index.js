<script>
    function save() {
        window.localStorage['header'] = document.getElementById('header').value;
    }

    function edit() {
        document.getElementById('header').value = window.localStorage['header'];
    }
</script>