<script lang="ts">
	import type { TeacherProfile } from '$lib/data/teacher';
	import { navLinks } from '$lib/data/config';

	let { teacher }: { teacher: TeacherProfile } = $props();

	let mobileMenuOpen = $state(false);
	let toggleButton: HTMLButtonElement | undefined = $state();
	let navLinksEl: HTMLUListElement | undefined = $state();

	function handleNavClick() {
		mobileMenuOpen = false;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && mobileMenuOpen) {
			mobileMenuOpen = false;
			toggleButton?.focus();
		}
	}

	$effect(() => {
		if (mobileMenuOpen && navLinksEl) {
			const firstLink = navLinksEl.querySelector<HTMLAnchorElement>('a');
			firstLink?.focus();
		}
	});

	// TODO [AUTH]: Add auth state check to conditionally show Login/Signup or
	//   user avatar + dashboard link. Consider accepting session data as a prop
	//   from +layout.svelte via $page.data.
	// TODO [CHAT]: Add an online/offline indicator dot next to the teacher name
</script>

<svelte:window onkeydown={handleKeydown} />

<nav class="nav" id="nav">
	<div class="nav__inner container">
		<a href="#hero" class="nav__logo" onclick={handleNavClick}>
			{teacher.name}
		</a>

		<button
			class="nav__toggle"
			onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
			aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
			aria-expanded={mobileMenuOpen}
			id="mobile-menu-toggle"
			bind:this={toggleButton}
		>
			<span class="nav__toggle-bar" class:open={mobileMenuOpen}></span>
			<span class="nav__toggle-bar" class:open={mobileMenuOpen}></span>
			<span class="nav__toggle-bar" class:open={mobileMenuOpen}></span>
		</button>

		<ul
			class="nav__links"
			class:nav__links--open={mobileMenuOpen}
			id="nav-links"
			bind:this={navLinksEl}
		>
			{#each navLinks as link}
				<li>
					<a href={link.href} class="nav__link" onclick={handleNavClick}>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<style>
	.nav {
		position: sticky;
		top: 0;
		z-index: 100;
		background: rgba(250, 250, 249, 0.85);
		backdrop-filter: blur(12px);
		border-bottom: 1px solid var(--color-border);
	}

	.nav__inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 64px;
	}

	.nav__logo {
		font-size: var(--font-size-lg);
		font-weight: var(--font-bold);
		color: var(--color-text);
		letter-spacing: -0.02em;
	}

	.nav__logo:hover {
		color: var(--color-accent);
	}

	.nav__links {
		display: flex;
		gap: var(--space-8);
	}

	.nav__link {
		font-size: var(--font-size-sm);
		font-weight: var(--font-medium);
		color: var(--color-text-secondary);
		transition: color var(--transition-fast);
		position: relative;
	}

	.nav__link::after {
		content: '';
		position: absolute;
		bottom: -4px;
		left: 0;
		width: 0;
		height: 2px;
		background: var(--color-accent);
		transition: width var(--transition-base);
	}

	.nav__link:hover {
		color: var(--color-text);
	}

	.nav__link:hover::after {
		width: 100%;
	}

	.nav__toggle {
		display: none;
		flex-direction: column;
		gap: 5px;
		padding: var(--space-2);
	}

	.nav__toggle-bar {
		display: block;
		width: 22px;
		height: 2px;
		background: var(--color-text);
		border-radius: 2px;
		transition: all var(--transition-base);
	}

	.nav__toggle-bar.open:nth-child(1) {
		transform: rotate(45deg) translate(5px, 5px);
	}

	.nav__toggle-bar.open:nth-child(2) {
		opacity: 0;
	}

	.nav__toggle-bar.open:nth-child(3) {
		transform: rotate(-45deg) translate(5px, -5px);
	}

	@media (max-width: 768px) {
		.nav__toggle {
			display: flex;
		}

		.nav__links {
			position: absolute;
			top: 64px;
			left: 0;
			right: 0;
			flex-direction: column;
			gap: 0;
			background: rgba(250, 250, 249, 0.98);
			backdrop-filter: blur(12px);
			border-bottom: 1px solid var(--color-border);
			max-height: 0;
			overflow: hidden;
			transition: max-height var(--transition-base);
		}

		.nav__links--open {
			max-height: 400px;
		}

		.nav__link {
			display: block;
			padding: var(--space-4) var(--space-6);
		}

		.nav__link::after {
			display: none;
		}
	}
</style>
