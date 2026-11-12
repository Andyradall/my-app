<script>
	/**
	 * Code sample in case studies. Pass the code as a string so braces need no escaping.
	 * @typedef {Object} Props
	 * @property {string} code
	 */

	/** @type {Props} */
	let { code } = $props();
</script>

<pre
	class="overflow-x-auto rounded-lg bg-slate-850 px-6 py-5 font-mono text-sm leading-6 text-zinc-150"><code
		>{code}</code
	></pre>
