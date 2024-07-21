<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<h1 class="text-bold text-center font-bold text-3xl">Welcome to SvelteKit</h1>

<h2 class="text-2xl text-teal-600 font-extrabold text-center">this thing is weirdo</h2>

<form method="post" use:enhance>
	<button>Sign out</button>
</form>
