<script lang="ts">
	import { teacher } from '$lib/data/teacher';

	const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="container">
		<div class="footer__inner">
			<p class="footer__copy">© {currentYear} {teacher.name} All rights reserved.</p>
			<p class="footer__tagline">ESL Teacher · {teacher.yearsExperience} Years of Experience</p>
		</div>
	</div>
</footer>

<style>
	.footer {
		padding-block: var(--space-8);
		border-top: 1px solid var(--color-border);
	}

	.footer__inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.footer__copy {
		font-size: var(--font-size-sm);
		color: var(--color-text-muted);
	}

	.footer__tagline {
		font-size: var(--font-size-sm);
		color: var(--color-text-muted);
	}

	@media (max-width: 768px) {
		.footer__inner {
			flex-direction: column;
			gap: var(--space-2);
			text-align: center;
		}
	}
</style>
